export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = ['about', 'projects', 'skills', 'contact']

  return (
    <div className="w-48 bg-gray-850 p-4 border-r border-gray-700">
      <ul className="space-y-4">
        {tabs.map(tab => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left capitalize px-3 py-2 rounded-md ${
                activeTab === tab ? 'bg-gray-700 text-white font-semibold' : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
