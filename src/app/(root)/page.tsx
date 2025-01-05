import CreditCardSection from "@/components/dashboard/creditCard";
import QuickTransfer from "@/components/dashboard/quickTransfer";
import RecentTransactions from "@/components/dashboard/transactions";
import SectionContainer from "@/components/sectionContainer";

export default function Home() {

  return (
    <div className="flex flex-col gap-8">
      <div className="p-8 grid grid-cols-custom-dashboard gap-8">
        <SectionContainer title='my cards' cta={{ label: 'see all', href: '/cards' }}>
          <CreditCardSection />
        </SectionContainer>

        <SectionContainer title='recent transactions' cta={{ label: '', href: '' }}>
          <RecentTransactions />
        </SectionContainer>
      </div>

      <div className="p-8 grid grid-cols-custom-dashboard-transfers gap-8">
        <SectionContainer title='quick transfer' cta={{ label: '', href: '' }}>
          <QuickTransfer />
        </SectionContainer>

        <div className="bg-yellow-400"></div>
      </div>
    </div>
  );
}
