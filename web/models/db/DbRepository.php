<?php


namespace models\db;


use models\db\IDb;

final class DbRepository
{
    private static $db;

    private function __construct()
    {

    }

    /**
     * @return IDb
     */
    public static function getDb()
    {

        if(!isset(self::$db) && empty(self::$db))
        {
            self::$db = new RepositoryApi();
        }
        return self::$db;
    }


}