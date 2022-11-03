import Image from "next/image";
import chart from 'public/images/CHART.svg'
import { Card } from "components/PageElements"

export default function Insights() {
    return (
        <Card header="Insights">
            <p className="text-text-secondary text-text-default">
                <div className="flex justify-center">
                    <Image src={chart} width={32} height={32} />
                </div>
            </p>
        </Card>
    )
}