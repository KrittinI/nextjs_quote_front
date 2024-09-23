import Link from "next/link";
import React from "react";

interface EditButtonProps {
    id: number;
}

export default function EditButton({ id }: EditButtonProps) {
    return <Link href={`/quotes/${id}/edit`}>Edit</Link>;
}
