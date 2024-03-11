import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
export function CardSala(props) {
  return (
    <Card className="w-[200px] rounded-lg bg-white">
      <CardHeader floated={false} className="h-[230px] mt-4">
        <img className="w-[90%] m-auto h-[80%] object-cover" src={props.image} />
        <h1 className="text-[24px] text-center font-bold text-black p-3">{props.time}</h1>
      </CardHeader>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="text-[24px] font-bold text-black p-3 " textGradient>
          {props.name}
        </Typography>
      </CardBody>
    </Card>
  );
}