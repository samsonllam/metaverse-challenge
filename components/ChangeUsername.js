import { useMoralis } from "react-moralis";

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = (e) => {
        e.preventDefault();
        const username = prompt(
            `Enter your new Username (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({
            username,
        }).catch((e) => console.log(e));
    };

    return (
        <form className="text-sm absolute top-5 right-5">
            <button
                disable={isUserUpdating}
                onClick={setUsername}
                className="hover:taext-pink-700"
            >
                Change your Username
            </button>
        </form>
    );
}

export default ChangeUsername;
