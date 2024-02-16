import { Card, CardHeader } from "@nextui-org/react";
import { Daccord } from "../../components";

const CardDaccord = () => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[600px] w-[800px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          What to watch
        </p>
        <h4 className="text-white font-medium text-large">
          Stream the Acme event
        </h4>
      </CardHeader>
      <Daccord />
    </Card>
  );
};
export { CardDaccord };
