import React from "react";

export default function QuotePage({ params }: { params: { id: string } }) {
    return <div>QuotePage {params.id}</div>;
}
