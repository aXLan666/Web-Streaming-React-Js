function Dashboard() {
    return (
      <>
        <div className="p-4 sm:ml-64 bg-yellow400 min-h-screen" id="Dashboard">
          <div className="p-4 border-2 border-gray200 border-dashed rounded-lg dark:bordergray700 mt-14">
            <p className="m-2 text-white font-mono text-xl">Dashboard</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray50 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray50 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray50 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray50 dark:bg-gray800">
              {'+'}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray50 dark:bg-gray800">
              <p className="text-2xl text-gray400 dark:text-gray500">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray50 h-28 dark:bg-gray800">
                <p className="text-2xl text-gray400 dark:text-gray500">+</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Dashboard;
  