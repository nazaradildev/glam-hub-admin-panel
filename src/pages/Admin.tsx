
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  // يمكن تطوير هذه الصفحة لتكون لوحة تحكم كاملة مع وظائف إدارة المحتوى والمستخدمين والعروض

  return (
    <div className="min-h-screen flex flex-col bg-gray-100" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-bold mb-8">لوحة الإدارة</h1>
        
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="dashboard" className="flex-1">الرئيسية</TabsTrigger>
            <TabsTrigger value="content" className="flex-1">إدارة المحتوى</TabsTrigger>
            <TabsTrigger value="users" className="flex-1">المستخدمين</TabsTrigger>
            <TabsTrigger value="offers" className="flex-1">العروض</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">إجمالي الحجوزات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">+14% منذ الشهر الماضي</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">العروض النشطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">+1 منذ الشهر الماضي</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">مقالات المدونة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+3 منذ الشهر الماضي</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">العملاء الجدد</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+18% منذ الشهر الماضي</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>أحدث الحجوزات</CardTitle>
                <CardDescription>استعرض أحدث 5 حجوزات تم تسجيلها</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-right border-b">
                        <th className="pb-2 font-medium">الاسم</th>
                        <th className="pb-2 font-medium">الخدمة</th>
                        <th className="pb-2 font-medium">التاريخ</th>
                        <th className="pb-2 font-medium">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">نورة أحمد</td>
                        <td className="py-3">قص وتصفيف شعر</td>
                        <td className="py-3">2023/10/15</td>
                        <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">مؤكد</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">سارة محمد</td>
                        <td className="py-3">صبغة شعر</td>
                        <td className="py-3">2023/10/16</td>
                        <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">قيد الانتظار</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">هدى العتيبي</td>
                        <td className="py-3">مكياج سهرة</td>
                        <td className="py-3">2023/10/17</td>
                        <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">مؤكد</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">مريم السعدون</td>
                        <td className="py-3">مانيكير وباديكير</td>
                        <td className="py-3">2023/10/18</td>
                        <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">مؤكد</span></td>
                      </tr>
                      <tr>
                        <td className="py-3">منى الحربي</td>
                        <td className="py-3">تنظيف بشرة</td>
                        <td className="py-3">2023/10/20</td>
                        <td className="py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">ملغي</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المحتوى</CardTitle>
                <CardDescription>إدارة المدونة والخدمات وفريق العمل ومعرض الصور</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  يمكن تطوير وظائف إدارة المحتوى هنا حسب المتطلبات
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>إدارة المستخدمين والصلاحيات ومجموعات العملاء</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  يمكن تطوير وظائف إدارة المستخدمين هنا حسب المتطلبات
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="offers">
            <Card>
              <CardHeader>
                <CardTitle>إدارة العروض</CardTitle>
                <CardDescription>إنشاء وتعديل العروض وتخصيص العروض حسب مجموعات العملاء</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  يمكن تطوير وظائف إدارة العروض هنا حسب المتطلبات
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
