
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنقوم بالرد عليك في أقرب وقت ممكن.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-3xl font-bold text-center mb-12">اتصل بنا</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle>أرسل لنا رسالة</CardTitle>
                <CardDescription>يسعدنا الرد على استفساراتكم وتلبية طلباتكم</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">الاسم الأول</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">الاسم الأخير</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">إرسال الرسالة</Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الاتصال</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-purple-600 ml-4">📱</span>
                    <div>
                      <p className="font-semibold">الهاتف</p>
                      <p className="text-gray-600">+966 12 345 6789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-purple-600 ml-4">✉️</span>
                    <div>
                      <p className="font-semibold">البريد الإلكتروني</p>
                      <p className="text-gray-600">info@elegancesalon.sa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-purple-600 ml-4">📍</span>
                    <div>
                      <p className="font-semibold">العنوان</p>
                      <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>ساعات العمل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>السبت - الأربعاء:</span>
                    <span>10:00 صباحًا - 8:00 مساءً</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الخميس:</span>
                    <span>10:00 صباحًا - 9:00 مساءً</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة:</span>
                    <span>2:00 مساءً - 9:00 مساءً</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  {/* Here you would normally integrate Google Maps or another map provider */}
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">خريطة الموقع ستظهر هنا</p>
                  </div>
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

export default Contact;
