import { Profile } from "@/features/profile/_ui/profile";

export default function ProfilePage() {
    return (
        <div className="w-[600px] flex flex-col gap-6 max-[800px]:hidden">
            <Profile />
        </div>
    );
}
