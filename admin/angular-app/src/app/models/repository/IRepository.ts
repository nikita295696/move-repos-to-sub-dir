import {Project} from '../Project';
import {Service} from '../Service';

export interface IRepository {
    getProjectById(id: number): Project;
    getProjects(): Project[];
    getServices(): Service[];
    getServiceById(id: number): Service;
}
