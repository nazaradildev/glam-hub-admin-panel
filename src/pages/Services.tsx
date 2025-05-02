
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    name: "قص وتصفيف الشعر",
    description: "قصات شعر عصرية وتصفيفات متنوعة تناسب جميع أنواع الشعر وأشكال الوجه.",
    price: "100-250 ريال",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    category: "الشعر"
  },
  {
    id: 2,
    name: "صبغة الشعر",
    description: "تقنيات متطورة في صبغ الشعر مع استخدام منتجات عالية الجودة للحفاظ على صحة الشعر.",
    price: "300-800 ريال",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    category: "الشعر"
  },
  {
    id: 3,
    name: "علاجات الشعر",
    description: "علاجات مكثفة لمختلف مشاكل الشعر بما في ذلك الترطيب العميق وإصلاح التلف.",
    price: "200-500 ريال",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    category: "الشعر"
  },
  {
    id: 4,
    name: "مانيكير وباديكير",
    description: "عناية كاملة بالأظافر مع خيارات متعددة من الألوان والتصميمات.",
    price: "80-150 ريال",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "العناية بالأظافر"
  },
  {
    id: 5,
    name: "مكياج احترافي",
    description: "مكياج احترافي للمناسبات الخاصة والأعراس بأحدث المنتجات وتقنيات المكياج.",
    price: "250-500 ريال",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "المكياج"
  },
  {
    id: 6,
    name: "تنظيف البشرة",
    description: "تنظيف عميق للبشرة لإزالة الشوائب وتجديد خلايا البشرة.",
    price: "150-300 ريال",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "العناية بالبشرة"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-center mb-12">خدماتنا</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-purple-600">{service.price}</span>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      حجز موعد
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
