import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import EditorWindow from '../components/EditorWindow'

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <EditorWindow>
          <h1 className="text-2xl text-green-400">Hi, I'm Sankita 👋</h1>
          <p className="mt-2 text-gray-300">A self-taught frontend developer passionate about building beautiful and functional web apps.</p>
        </EditorWindow>
      </div>
    </div>
  );
}
