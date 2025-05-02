
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10 rtl" dir="rtl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700">صالون الأناقة</Link>
        <div className="flex space-x-reverse space-x-6">
          <Link to="/" className="text-gray-700 hover:text-purple-600">الرئيسية</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-600">خدماتنا</Link>
          <Link to="/team" className="text-gray-700 hover:text-purple-600">فريقنا</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-purple-600">معرض الصور</Link>
          <Link to="/blog" className="text-gray-700 hover:text-purple-600">المدونة</Link>
          <Link to="/offers" className="text-gray-700 hover:text-purple-600">العروض</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-600">اتصل بنا</Link>
        </div>
        <Link to="/admin" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">لوحة الإدارة</Link>
      </div>
    </nav>
  );
};

export default Navbar;
