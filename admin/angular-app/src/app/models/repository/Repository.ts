import {IRepository} from './IRepository';
import {RepositoryMemory} from './RepositoryMemory';

export class Repository {
    private static repository: IRepository = null;
    static getRepository() {
        if (Repository.repository == null) {
            Repository.repository = new RepositoryMemory();
        }
        return Repository.repository;
    }
}
