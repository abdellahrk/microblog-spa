import {Component} from "react";
import { Badge, Box, Button, Card, Text, HStack, Image } from "@chakra-ui/react"

export default function  BlogItem(props)  {
    const article = props.article;
    console.log(props);
    return (

    <Card.Root maxW="sm" overflow="hidden">
        <Image
            src={article.imagePath}
            alt="Green double couch with wooden legs"
        />
        <Card.Body gap="2">
            <Card.Title>{article.title}</Card.Title>
            <Card.Description>
                {article.content.substring(0, 60)}...
            </Card.Description>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                $450
            </Text>
        </Card.Body>
        <Card.Footer gap="2">
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">{article.author.fullName}</Button>
        </Card.Footer>
    </Card.Root>
)
}