import { DbDataType } from '@ctsy/model/dist/index';

/**
  * 代理商 Agent
  * 代理商编号 AID 自增序号(bigint)
  * 代理商名称 Title 字符50(char(50))
  * 代理商日收款限制 DayLimit 金额(double(20,2))
  * 代理商状态 Status 状态值(tinyint(1))
  * 代理商用户 UID 序号(bigint)
  * 创建时间 CTime 时间日期(datetime)
  * 创建人 CUID 序号(bigint)
*/
export default {
    UID: {
        type: DbDataType.bigint,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: 0,
        allowNull: false
    },
    Sex: {
        type: DbDataType.bigint,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
    DTime: {
        type: DbDataType.datetime,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: "",
        allowNull: false
    },
}