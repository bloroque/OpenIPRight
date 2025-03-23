import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { BookCarousel } from "./component/book-carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard: React.FC = () => {

    return (
        <>
            <ScrollArea id="div-ScrollArea" className="w-full h-full pb-1" style={{height:"calc(100% - 42px)"}}>
                <div className="">
                    <div className="flex-1 flex flex-col overflow-y-auto">
                        <div className="p-6">
                            <div className="mt-5 mb-8">
                            <h1 className="text-4xl font-bold mb-4">Keep the story going ...</h1>
                            <p className="text-gray-700 max-w-xl">
                                Don't let the story end just yet. Continue reading your last book and immerse yourself in the world of
                                literature.
                            </p>

                            <Button className="mt-6 bg-gray-900 hover:bg-gray-800">
                                Start reading <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            </div>

                            <BookCarousel />

                        </div>

                        <div className="mt-auto p-6 border-t flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span>
                                    Got chance to check out the <span className="text-rose-500">new collection</span> of Harry Potter? It's a
                                    must-read for any fan of the series, don't miss out!
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-rose-500">04</span> / 60 books
                            </div>
                        </div>
                    </div>

                </div>
            </ScrollArea>
        </>
    )

}

export default Dashboard;