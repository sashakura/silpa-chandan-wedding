import Hero from "@/components/hero/Hero";
import Countdown from "@/components/countdown/Countdown";
import Invitation from "@/components/invitation/Invitation";
import OurStory from "@/components/story/OurStory";
import Events from "@/components/events/Events";
import Venue from "@/components/venue/Venue";
import Families from "@/components/family/Families";
import Wishes from "@/components/wishes/Wishes";
import Footer from "@/components/layout/Footer";
import InvitationOpening from "@/components/invitation/InvitationOpening";

export default function Home() {
  return (
    <InvitationOpening>
      <main>
        <Hero />
        <Countdown />
        <Invitation />
        <OurStory />
        <Events />
        <Venue />
        <Families />
        <Wishes />
        <Footer />
      </main>
    </InvitationOpening>
  );
}
