/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Button,
  Dropdown,
  Carousel,
  ProgressBar,
  Modal,
  Toast,
} from "react-bootstrap";
import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
  const [progress, setProgress] = useState(40);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 2]);

  return (
    <div className={styles.container}>
      <div className="wrapper">
      <motion.div
        className="container2"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
      </div>
      <div className="progressDiv">
        <ProgressBar now={progress} className="test" />
      </div>
      <Carousel className="carousel">
        <Carousel.Item className="cItem">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1641849048330-a34fa8d7a268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="cItem">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1638913658211-c999de7fe786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="cItem">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1641865264156-bbe3d9784ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="btn-container">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Button onClick={toggleShowA} className="">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA} className="toast">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, youre reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="https://youtube.com/">YouTube</Dropdown.Item>
          <Dropdown.Item href="/about">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
