
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">أهلا بكم في صالون الأناقة</h1>
              <p className="text-xl mb-8">نحن نقدم خدمات تصفيف الشعر والتجميل بأعلى مستويات الاحترافية والجودة</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg">
                    <span>خدماتنا</span>
                    <ArrowRight className="mr-2 h-5 w-5 rtl:-scale-x-100" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 px-8 py-6 text-lg">
                    احجز موعداً
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="صورة صالون التجميل" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا المميزة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl text-purple-600 mb-4">💇‍♀️</div>
              <h3 className="text-xl font-semibold mb-3">قص وتصفيف الشعر</h3>
              <p className="text-gray-600 mb-4">نقدم أحدث قصات الشعر وتصفيفات الشعر الحديثة على يد مصففي شعر محترفين.</p>
              <Link to="/services" className="text-purple-600 font-medium hover:text-purple-800">اقرأ المزيد</Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl text-purple-600 mb-4">💅</div>
              <h3 className="text-xl font-semibold mb-3">العناية بالأظافر</h3>
              <p className="text-gray-600 mb-4">خدمات مانيكير وباديكير احترافية مع مجموعة واسعة من الألوان والتصميمات.</p>
              <Link to="/services" className="text-purple-600 font-medium hover:text-purple-800">اقرأ المزيد</Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl text-purple-600 mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">مكياج احترافي</h3>
              <p className="text-gray-600 mb-4">مكياج احترافي للمناسبات الخاصة، حفلات الزفاف والمناسبات المهمة.</p>
              <Link to="/services" className="text-purple-600 font-medium hover:text-purple-800">اقرأ المزيد</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">آخر المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="صورة المقال" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">أحدث صيحات الشعر لموسم الصيف</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">اكتشفي أحدث صيحات الشعر لموسم الصيف هذا العام واختاري ما يناسبك لإطلالة متجددة ومميزة.</p>
                <Link to="/blog" className="text-purple-600 font-medium hover:text-purple-800">قراءة المزيد</Link>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="صورة المقال" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">نصائح للعناية بالبشرة في فصل الصيف</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">تعرفي على أهم النصائح للحفاظ على بشرة صحية ونضرة خلال فصل الصيف مع ارتفاع درجات الحرارة.</p>
                <Link to="/blog" className="text-purple-600 font-medium hover:text-purple-800">قراءة المزيد</Link>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="صورة المقال" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">كيفية اختيار ألوان المكياج المناسبة لبشرتك</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">دليل شامل يساعدك على اختيار ألوان المكياج التي تناسب لون بشرتك للحصول على إطلالة طبيعية ومثالية.</p>
                <Link to="/blog" className="text-purple-600 font-medium hover:text-purple-800">قراءة المزيد</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
