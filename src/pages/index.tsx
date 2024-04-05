import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function IndexPage(
) {

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Main content area</h1>
      </main>
      <Footer />
    </>
  )
}
