import { auth } from "@clerk/nextjs";

const AdminIds = [
    "user_2uLKtPiV4483nVboiByh2mgv89H",
];

export const isAdmin = () => {
    const { userId } = auth(); // Use getAuth instead of auth

    if (!userId) {
        return false;
    }
    return AdminIds.includes(userId); // Use includes for better readability
};