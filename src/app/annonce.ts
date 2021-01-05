export class Annonce {
public id: number;
public type: string;
constructor(

        public note: number,
        public description: string,
        public subtitle: string,
        public titre: string,
        public valable: boolean,
        public ville: string,
        public categorie: string,
        public duree: string
    ) {}
}
