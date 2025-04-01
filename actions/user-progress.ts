"use server";

import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { getCourseById, getUserProgress } from "@/db/queries";
import db from "@/db/drizzle";
import { userProgress, challengeProgress, challenges } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { POINTS_TO_REFILL } from "@/constants";

export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Unauthorized");
    }
    const course = await getCourseById(courseId);
    if (!course) {
        throw new Error("Course not found");
    }

    const existingUserProgress = await getUserProgress();
    if (existingUserProgress) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "logo.jpg",
        }).where(eq(userProgress.userId, userId));

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    } else {
        await db.insert(userProgress).values({
            userId,
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "logo.jpg",
            hearts: 5,
            points: 0,
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }
};

export const reduceHearts = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }
    const currentUserProgress = await getUserProgress();
    const challenge = await db.query.challenges.findFirst({
        where: eq(challenges.id, challengeId),
    });
    if (!challenge) {
        throw new Error("Challenge not found");
    }
    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });
    const isPractice = !!existingChallengeProgress;
    if (isPractice) {
        return { error: "practice" };
    }

    if (!currentUserProgress) {
        throw new Error("User not found");
    }
    if (currentUserProgress.hearts === 0) {
        return { error: "hearts" };
    }
    await db.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts - 1, 0),
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User not found");
    }
    if (currentUserProgress.hearts === 5) {
        throw new Error("Hearts are already full");
    }
    if (currentUserProgress.points < POINTS_TO_REFILL) {
        throw new Error("Not enough points");
    }

    await db.update(userProgress).set({
        hearts: 5,
        points: currentUserProgress.points - POINTS_TO_REFILL,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
    revalidatePath("/lesson");
};

// Buy 1 Heart for 150 Points
export const buyOneHeart = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User not found");
    }
    if (currentUserProgress.points < 50) {
        throw new Error("Not enough points");
    }
    if (currentUserProgress.hearts >= 5) {
        throw new Error("Hearts are already full");
    }

    await db.update(userProgress).set({
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points - 50,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
};

// Buy 2 Hearts for 225 Points
export const buyTwoHearts = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User not found");
    }
    if (currentUserProgress.points < 90) {
        throw new Error("Not enough points");
    }
    if (currentUserProgress.hearts >= 4) {
        throw new Error("Not enough space for 2 hearts");
    }

    await db.update(userProgress).set({
        hearts: Math.min(currentUserProgress.hearts + 2, 5),
        points: currentUserProgress.points - 90,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quest");
    revalidatePath("/leaderboard");
};
