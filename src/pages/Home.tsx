import Hero from '@/components/home/Hero';
import Ticker from '@/components/home/Ticker';
import AnnouncementsSection from '@/components/home/AnnouncementsSection';
import TournamentsSection from '@/components/home/TournamentsSection';
import JourneySection from '@/components/home/JourneySection';
import TeamSection from '@/components/home/TeamSection';
import JoinSection from '@/components/home/JoinSection';
import PartnersTeaser from '@/components/home/PartnersTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <AnnouncementsSection />
      <TournamentsSection />
      <JourneySection />
      <TeamSection />
      <JoinSection />
      <PartnersTeaser />
    </>
  );
}
