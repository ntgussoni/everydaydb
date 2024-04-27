/* eslint-disable react/no-unescaped-entities */
"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TextAnim from "./TextAnim";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  // image: string;
}

const features: FeatureProps[] = [
  {
    title: "CLI",
    description:
      "With our CLI, you can easily manage your data from the terminal. It's fast and easy to use.",
    // image: image4,
  },
  {
    title: "Client libraries",
    description:
      "We provide client libraries for popular programming languages like Python, JavaScript, and Go.",
    // image: image3,
  },
  {
    title: "API",
    description:
      "Our API is simple and easy to use. You can access your data from anywhere, anytime.",
    // image: image,
  },
];

const featureList: string[] = ["CLI", "Client libraries", "API"];

const D = ({ children, className = "" }) => (
  <span className={cn(className, "text-gray-700")}>{children}</span>
);

const V = ({ children, className = "" }) => (
  <span className={cn(className, "text-[#ff9c46d4]")}>{children}</span>
);

const M = ({ children, className = "" }) => (
  <span className={cn(className, "text-[red]")}>{children}</span>
);

export const Features = () => {
  return (
    <section id="features" className="container space-y-8 px-24">
      <h2 className="text-3xl font-bold drop-shadow-lg md:text-center lg:text-4xl">
        We got you{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          covered
        </span>
      </h2>

      <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant={"secondary"} className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 ">
        {features.map(({ title, description }: FeatureProps, i) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="mr-8 w-full overflow-hidden rounded-md border  border-primary/60 bg-white py-8 pl-3 font-mono text-sm">
                {i == 0 && <TextAnim />}
                {i == 1 && (
                  /**const payload = await client.bucket('movies').get(8);
        console.log('Received payload:', payload); */

                  <div className="flex flex-col gap-1">
                    <span className="drop-shadow-lg">
                      <span className="select-none text-gray-400 ">1</span>{" "}
                      <M>const</M> <V>payload</V> = <M>await</M> <V>client</V>.
                      <V>bucket</V>(<D>"movies"</D>).<V>get</V>(<D>8</D>);
                      <br />
                      <span className="select-none text-gray-400">2</span>{" "}
                      <M>console</M>.<V>log</V>(
                      <D>'Received payload:', payload</D>);
                    </span>
                  </div>
                )}
                {i == 2 && (
                  <div className="flex flex-col gap-1">
                    <span className="drop-shadow-lg">
                      {/**const response = await fetch(
                        `https://api.example.com/edb/v1/${bucket}/${movieId}`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        },
                      ); 
                      Using M(method),V(variable name),D(data) wrap the code above*/}
                      <span className="select-none text-gray-400">1</span>{" "}
                      <M>const</M> <V>response</V> = <M>await</M> <V>fetch</V>(
                      <D>
                        `https://api.example.com/edb/v1/${"{bucket}"}/$
                        {"{movieId}"}`
                      </D>
                      ,{"{"}
                      <br />
                      <span className="select-none text-gray-400">2</span>
                      <D className="ml-4">
                        headers: {"{"}
                        <br />
                        <span className="select-none text-gray-400">3</span>
                        <V className="ml-8">Authorization</V>:{" "}
                        <D>`Bearer ${"{token}"}`</D>,<br />
                        <span className="select-none text-gray-400">4</span>
                        <span className="ml-4">{"}"}</span>
                      </D>{" "}
                      <br />
                      <span className="select-none text-gray-400">5</span>{" "}
                      {"});"}
                    </span>

                    {/* <span className="ml-4">{"headers: {"}</span>
                    <span className="ml-8">
                      {"Authorization: `Bearer ${token}`,"}
                    </span>
                    <span className="ml-4">{"},"}</span>
                    <span className="">{"});"}</span> */}
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
