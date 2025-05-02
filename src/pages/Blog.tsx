
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "أحدث صيحات الشعر لموسم الصيف",
    excerpt: "اكتشفي أحدث صيحات الشعر لموسم الصيف هذا العام واختاري ما يناسبك لإطلالة متجددة ومميزة.",
    content: "يعد فصل الصيف فرصة مثالية لتجديد إطلالتك وتجربة قصات وألوان شعر جديدة. في هذا المقال، نستعرض أبرز صيحات الشعر لهذا الموسم، بدءًا من القصات القصيرة المنعشة وحتى الألوان الجريئة التي تُضفي حيوية على مظهرك. نقدم لكِ أيضًا نصائح للعناية بالشعر في الطقس الحار والحفاظ على صحته ولمعانه.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "سارة الأحمد",
    date: "2023-06-15",
    category: "الشعر",
  },
  {
    id: 2,
    title: "نصائح للعناية بالبشرة في فصل الصيف",
    excerpt: "تعرفي على أهم النصائح للحفاظ على بشرة صحية ونضرة خلال فصل الصيف مع ارتفاع درجات الحرارة.",
    content: "مع ارتفاع درجات الحرارة في فصل الصيف، تحتاج البشرة إلى عناية خاصة للحفاظ على نضارتها وحمايتها من أضرار أشعة الشمس. في هذا المقال، نقدم لكِ مجموعة من النصائح الهامة للعناية ببشرتك خلال أشهر الصيف، بما في ذلك استخدام واقي الشمس المناسب، والترطيب المستمر، والتقشير الدوري، واستخدام منتجات خالية من الزيوت لمنع ظهور حب الشباب.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "نورة السعيد",
    date: "2023-06-22",
    category: "العناية بالبشرة",
  },
  {
    id: 3,
    title: "كيفية اختيار ألوان المكياج المناسبة لبشرتك",
    excerpt: "دليل شامل يساعدك على اختيار ألوان المكياج التي تناسب لون بشرتك للحصول على إطلالة طبيعية ومثالية.",
    content: "يلعب لون البشرة دورًا هامًا في تحديد ألوان المكياج المناسبة لكِ. في هذا المقال، نقدم لكِ دليلًا شاملًا لاختيار ألوان المكياج التي تتناسب مع درجة لون بشرتك، سواء كانت فاتحة أو متوسطة أو داكنة. سنتحدث عن ألوان أحمر الشفاه، وظلال العيون، والبلاشر المثالية لكل درجة لون بشرة، لتساعدك على إبراز جمالك الطبيعي وتعزيز ثقتك بنفسك.",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "هدى محمد",
    date: "2023-07-05",
    category: "المكياج",
  },
  {
    id: 4,
    title: "العناية بالأظافر: أساسيات المانيكير المنزلي",
    excerpt: "تعلمي خطوات المانيكير المنزلي الاحترافي للحفاظ على أظافر صحية وجميلة.",
    content: "يمكنك الحصول على مانيكير احترافي في المنزل باتباع بعض الخطوات البسيطة. في هذا المقال، نشرح لكِ كيفية القيام بالمانيكير المنزلي بطريقة صحيحة، بدءًا من تنظيف الأظافر وتقليمها، وحتى تطبيق طلاء الأظافر بشكل احترافي. كما نقدم لكِ نصائح للحفاظ على صحة أظافرك وتقويتها، واختيار المنتجات المناسبة للعناية بها.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "مها أحمد",
    date: "2023-07-18",
    category: "العناية بالأظافر",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-center mb-4">المدونة</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            اطلعي على أحدث المقالات والنصائح في مجال التجميل والعناية بالبشرة والشعر
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 pb-3">
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center text-sm mt-1">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                            <span className="mx-2">•</span>
                            <span>{post.category}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 py-3">
                        <p className="line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <div className="pt-3">
                        <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">قراءة المزيد</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex justify-center pt-6">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  تحميل المزيد من المقالات
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>التصنيفات</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    <li><Link to="#" className="text-purple-600 hover:text-purple-800">الشعر (8)</Link></li>
                    <li><Link to="#" className="text-purple-600 hover:text-purple-800">المكياج (12)</Link></li>
                    <li><Link to="#" className="text-purple-600 hover:text-purple-800">العناية بالبشرة (10)</Link></li>
                    <li><Link to="#" className="text-purple-600 hover:text-purple-800">العناية بالأظافر (5)</Link></li>
                    <li><Link to="#" className="text-purple-600 hover:text-purple-800">نصائح جمالية (7)</Link></li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>الأكثر قراءة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-medium hover:text-purple-600">
                          <Link to="#">{post.title}</Link>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString('ar-SA')}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle>اشتركي في النشرة البريدية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    احصلي على أحدث المقالات والنصائح مباشرة إلى بريدك الإلكتروني
                  </p>
                  <form className="space-y-3">
                    <div className="space-y-1">
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="w-full border rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">اشتراك</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

