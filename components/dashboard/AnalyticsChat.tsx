"use client"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts"
import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "../ui/card";
import analytics from "@/data/analytics";

const AnalyticsChat = () => {
    return ( 
        <Card>
            <CardHeader>
                <CardTitle>Data Graph</CardTitle>
                <CardDescription>view graphical</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width:"100%", height: "300px"}}>
                <ResponsiveContainer >
                    <LineChart width={1100} height={300} data={analytics}>
                        <Line dataKey="uv" type="monotone" color="#888888" />
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default AnalyticsChat;