import { auth } from "@clerk/nextjs/server";

const AdminIds = [
    "user_2uLKtPiV4483nVboiByh2mgv89H",
];

export const isAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }
    return AdminIds.includes(userId);
};