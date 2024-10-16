/** @format */

import { Card } from "react-bootstrap";
import { SimplifiedNote } from "../interfaces";
import { Link } from "react-router-dom";

export default function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <>
      <Card
        as={Link}
        to={`/${id}`}
        className={`h-100 text-reset text-decoration-none ${styles.card}`}
      >
        <Card.Body></Card.Body>
      </Card>
    </>
  );
}
