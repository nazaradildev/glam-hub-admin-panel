
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    title: "عرض العناية الشاملة",
    description: "استمتعي بباقة متكاملة تشمل قص وتصفيف الشعر مع علاج ترطيب عميق بالإضافة إلى مانيكير وباديكير.",
    originalPrice: "650 ريال",
    offerPrice: "450 ريال",
    validUntil: "2023-12-31",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "عرض تجديد البشرة",
    description: "جلسة تنظيف عميق للبشرة مع علاج متخصص حسب نوع البشرة بالإضافة إلى جلسة مساج للوجه.",
    originalPrice: "400 ريال",
    offerPrice: "280 ريال",
    validUntil: "2023-11-30",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "عرض العروس المميز",
    description: "باقة شاملة للعروس تتضمن جلسة تجريبية، مكياج الزفاف، تصفيف الشعر، مانيكير وباديكير.",
    originalPrice: "2000 ريال",
    offerPrice: "1500 ريال",
    validUntil: "2023-12-31",
    image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1066&q=80"
  },
  {
    id: 4,
    title: "عرض صبغة الشعر",
    description: "صبغة شعر كاملة مع جلسة علاج وترطيب للشعر لحمايته من التلف والحفاظ على اللون.",
    originalPrice: "500 ريال",
    offerPrice: "350 ريال",
    validUntil: "2023-11-15",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-center mb-4">عروضنا المميزة</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            استمتعي بعروضنا الحصرية والخصومات المميزة على باقات وخدمات متنوعة لتلبية احتياجاتك.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>
                    صالح حتى: {new Date(offer.validUntil).toLocaleDateString('ar-SA')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{offer.description}</p>
                  <div className="flex items-center space-x-reverse space-x-4">
                    <span className="text-gray-500 line-through text-sm">{offer.originalPrice}</span>
                    <span className="font-bold text-xl text-purple-600">{offer.offerPrice}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">احجز الآن</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
