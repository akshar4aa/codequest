import BackgroundGlow from "./artwork/BackgroundGlow";
import Character from "./artwork/Character";
import CodeEditorCard from "./artwork/CodeEditorCard";

function HeroArtwork() {
  return (
    <div className="relative hidden lg:flex h-[950px] w-[950px] items-center justify-center">

      <BackgroundGlow />

      <Character />

      <CodeEditorCard />

    </div>
  );
}

export default HeroArtwork;