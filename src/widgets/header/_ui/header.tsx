import { Container } from "@/shared/ui/container";
import { ProfileMenu } from "./profile-menu";

export const Header = () => {
    return (
        <header className="md:px-4 md:mt-4 h-[50px]">
            <Container className="flex flex-row justify-between items-center h-full bg-white shadow-md md:rounded-[10px] text-blue-dark">
                <span className="text-base/[15.92px] font-semibold">
                    WT Control
                </span>
                <span>
                    <ProfileMenu />
                </span>
            </Container>
        </header>
    );
};
