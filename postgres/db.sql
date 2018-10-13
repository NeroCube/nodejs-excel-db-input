--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3 (Debian 10.3-1.pgdg90+1)
-- Dumped by pg_dump version 10.3 (Debian 10.3-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: book_seq; Type: SEQUENCE; Schema: public; Owner: nero
--

CREATE SEQUENCE public.book_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.book_seq OWNER TO nero;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: BOOK; Type: TABLE; Schema: public; Owner: nero
--

CREATE TABLE public."BOOK" (
    "ID" int DEFAULT nextval('public.book_seq'::regclass) NOT NULL,
    "NAME" text NOT NULL,
    "CREATED_AT" timestamp without time zone DEFAULT now() NOT NULL,
    "CREATED_BY" text DEFAULT 'SYSTEM'::text NOT NULL
);


ALTER TABLE public."BOOK" OWNER TO nero;

--
-- Name: BOOK BOOK_pkey; Type: CONSTRAINT; Schema: public; Owner: nero
--

ALTER TABLE ONLY public."BOOK"
    ADD CONSTRAINT "BOOK_pkey" PRIMARY KEY ("ID");


--
-- PostgreSQL database dump complete
--

