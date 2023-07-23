const dashboardLayout = ({
    children
}: {
    children : React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex
            md:flex-col md:fixed md:inset-y-0 z-[80]  
            bg-gray7-900">
                <div>
                    Hello Siderbar!
                </div>

            </div>
        </div>
    )
}