
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10" dir="rtl">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">صالون الأناقة</h3>
            <p className="text-gray-300">
              نقدم خدمات تصفيف الشعر والتجميل بأعلى مستويات الجودة لتلبية توقعات عملائنا الكرام.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">الرئيسية</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">خدماتنا</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">فريقنا</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">معرض الصور</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">المدونة</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">اتصل بنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <span>+966 12 345 6789</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@elegancesalon.sa</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                <span>شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} صالون الأناقة - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
