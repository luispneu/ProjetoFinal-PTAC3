import { NextResponse } from "next/server";

export const listaDeCarros = [
    {
        id: 1,
        nomeDoCarro: "O Senhor dos Anéis",
        MarcaDoCarro: "J.R.R. Tolkien",
        anoDoCarro: 1954,
        PreçoDoCarro: "Fantasia"
    },
    {
        id: 2,
        nomeDoCarro: "1984",
        MarcaDoCarro: "George Orwell",
        anoDoCarro: 1949,
        PreçoDoCarro: "Distopia"
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}