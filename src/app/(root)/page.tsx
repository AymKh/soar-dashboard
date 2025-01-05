import CreditCardContainer from "@/components/dashboard/creditCard";
import SectionContainer from "@/components/sectionContainer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Etheme, TCreditCardProps } from "@/lib/types";

export default function Home() {

  const cards: TCreditCardProps[] = [
    {
      cardNumber: '1234 5678 1234 5678',
      holderName: 'John Doe',
      validThru: '12/23',
      balance: 1234.56
    },
    {
      cardNumber: '1234 5678 1234 5678',
      holderName: 'John Doe',
      validThru: '12/23',
      balance: 1234.56,
      theme: Etheme.light
    }
  ]

  return (
    <div className="p-8 grid grid-cols-custom-dashboard gap-8">

      <SectionContainer title='my cards' cta={{ label: 'see all', href: '/cards' }}>
        <div className="grid-cols-credit-cards gap-4 grid overflow-x-scroll scroll-hidden">
          {
            cards.map((card, index) => (
              <CreditCardContainer
                key={index}
                cardNumber={card.cardNumber}
                holderName={card.holderName}
                validThru={card.validThru}
                balance={card.balance}
                theme={card.theme}
              />
            ))
          }
        </div>
      </SectionContainer>

      <div className="bg-yellow-200"></div>
    </div>
  );
}
