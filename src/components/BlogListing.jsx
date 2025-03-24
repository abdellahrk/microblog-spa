import BlogItem from "@/components/BlogItem.jsx";
import {useEffect, useState} from "react";
import Api from "@/utils/apis.js";
import {Flex, SimpleGrid} from "@chakra-ui/react";

export default function BlogListing() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = new Api().getBlogPosts().then((res) => {
            if (res.status !== 200) {
                console.log(res.status)
            }
            setData(res.data)
            setCurrentPage(res.current_page)
            setTotalPages(res.pages)
        });

    }, []);

    const articles = data.map((article, index) =>
         <BlogItem key={index} article={article} />
    );

     console.log(articles)

    return (
        <SimpleGrid columns={[2, null, 3]} gap="40px">
            {articles}
        </SimpleGrid>
    ) ;
}