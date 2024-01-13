export default function TabBar() {
    return (
        <div className="mt-5 border-white/5 shadow-sm bg-slate-900 border space-x-5 rounded flex p-5 justify-center items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2zM8 7V5h2v2zM6 9V7h2v2zm-2 2V9h2v2zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6zm2-2v2h-2v-2zm2-2v2h-2v-2zm0 0h2v-2h-2z"/>
            </svg>
            <h1 className="text-xl underline">Home</h1>
            <h1 className="text-xl text-white/20 select-none">Posts</h1>
        </div>
    )
}