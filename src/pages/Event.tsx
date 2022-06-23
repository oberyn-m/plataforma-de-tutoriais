import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1">
            <div className="py-[20%] flex items-center justify-center">
              <h1>Por gentileza clicar em um dos vídeos ao lado!</h1>
            </div>
          </div>}
        <Sidebar />
      </main>
    </div>

  )
}