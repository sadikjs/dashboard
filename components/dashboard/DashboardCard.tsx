import { Newspaper } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";
interface DashboardType {
    title: string; 
    count: number; 
    icon: React.ReactElement<LucideIcon>

}
const DashboardCard = ({title, count, icon}: DashboardType) => {
    return ( 
        <Card className="bg-slate-100 dark: bg-slate-800 p-4">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark: text-slate-200">{title}</h3>
                <div className="flex justify-center items-center gap-5 ">
                    {icon}
                    <h3 className="text-5xl font-semibold text-slate-500 dark: text-slate-200">{count}</h3>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default DashboardCard;