import { InvitationWrapper } from "@/components/invitation/InvitationWrapper";
import { Greeting } from "@/components/invitation/Greeting";
import { Deceased } from "@/components/invitation/Deceased";
import { EventDetails } from "@/components/invitation/EventDetails";
import { Countdown } from "@/components/invitation/Countdown";
import { Rundown } from "@/components/invitation/Rundown";
import { PrayerVerse } from "@/components/invitation/PrayerVerse";
import { Location } from "@/components/invitation/Location";
import { Guestbook } from "@/components/invitation/Guestbook";
import { ShareWhatsApp } from "@/components/invitation/ShareWhatsApp";
import { Footer } from "@/components/invitation/Footer";

export default function Home() {
  return (
    <InvitationWrapper>
      {/* 1. Greeting */}
      <Greeting />

      {/* 2. Mengenang Almarhum */}
      <Deceased />

      {/* 3. Detail Acara */}
      <EventDetails />

      {/* 4. Countdown */}
      <Countdown />

      {/* 5. Susunan Acara */}
      <Rundown />

      {/* 6. Doa & Ayat Suci */}
      <PrayerVerse />

      {/* 7. Lokasi Acara */}
      <Location />

      {/* 8. Titip Doa / Guestbook */}
      <Guestbook />

      {/* 9. WhatsApp Share */}
      <ShareWhatsApp />

      {/* 10. Footer */}
      <Footer />
    </InvitationWrapper>
  );
}
