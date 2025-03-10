import { Request, Response } from "express";
import { Contorller } from "../abstract/Contorller";
import { Service } from "../abstract/Service";
import { DB } from "../app";
import { PageService } from "../Service/PageService";
require('dotenv').config()

export class ReservationsController extends Contorller {
    protected service: Service;

    constructor() {
        super();
        this.service = new PageService();
    }

    public async test(Request: Request, Response: Response) {
        try {
            await DB.connection?.query("USE lab_b310;");
    
            const resp = await DB.connection?.query("SELECT reservation_id, student_id, seat_id, timeslot_id, create_time FROM Reservations;");
            Response.send(resp)
    
        } catch (error) {
            console.error('Database query error:', error);
            Response.status(500).send({ error: 'Database query failed' });
        }
    
    }
}