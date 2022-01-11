import React, { useState } from 'react';
import FooterPane from "@containers/MainPage/PaneContent/FooterPane"
import { numberInfoType } from "@containers/MainPage/PaneContent/types"
import Decimal from "decimal.js"

type propsType = {
  activeKey: string
}


function PaneContent(props: propsType) {
  const { activeKey } = props
  const [numberInfo, setNumberInfo] = useState<numberInfoType>({
    openingPrice: 0,
    extremePrice: 0,
    calculatedPercent: 0
  })

  const priceCalculatedInfo = [
    { percent: 4, backgroundColor: "#BB5E00", color: "white", fontColor: "#BB5E00" },
    { percent: 3.5, backgroundColor: "#EA7500", color: "white", fontColor: "#EA7500" },
    { percent: 3, backgroundColor: "#FF9224", color: "black", fontColor: "black" },
    { percent: 2.5, backgroundColor: "#FFAF60", color: "black", fontColor: "black" },
    { percent: 2, backgroundColor: "#FFC78E", color: "black", fontColor: "black" },
    { percent: 1.5, backgroundColor: "#FFDCB9", color: "black", fontColor: "black" },
    { percent: 1, backgroundColor: "white", color: "black", fontColor: "black" },
    { percent: -1.5, backgroundColor: "#BBFFBB", color: "black", fontColor: "black" },
    { percent: -2, backgroundColor: "#93FF93", color: "black", fontColor: "black" },
    { percent: -2.5, backgroundColor: "#53FF53", color: "black", fontColor: "black" },
    { percent: -3, backgroundColor: "#00EC00", color: "black", fontColor: "black" },
    { percent: -3.5, backgroundColor: "#00BB00", color: "white", fontColor: "#00BB00" },
    { percent: -4, backgroundColor: "#009100", color: "white", fontColor: "#009100" },
  ]

  const extremePriceCalculatedInfo = [
    { percent: 5, backgroundColor: "#BB5E00", color: "white", fontColor: "#BB5E00" },
    { percent: 4.5, backgroundColor: "#EA7500", color: "white", fontColor: "#EA7500" },
    { percent: 4, backgroundColor: "#FF9224", color: "black", fontColor: "black" },
    { percent: 3.5, backgroundColor: "#FFAF60", color: "black", fontColor: "black" },
    { percent: 3, backgroundColor: "#FFC78E", color: "black", fontColor: "black" },
    { percent: 2.5, backgroundColor: "#FFDCB9", color: "black", fontColor: "black" },
    { percent: numberInfo.calculatedPercent, backgroundColor: "white", color: "black", fontColor: "black" },
    { percent: -2.5, backgroundColor: "#BBFFBB", color: "black", fontColor: "black" },
    { percent: -3, backgroundColor: "#93FF93", color: "black", fontColor: "black" },
    { percent: -3.5, backgroundColor: "#53FF53", color: "black", fontColor: "black" },
    { percent: -4, backgroundColor: "#00EC00", color: "black", fontColor: "black" },
    { percent: -4.5, backgroundColor: "#00BB00", color: "white", fontColor: "#00BB00" },
    { percent: -5, backgroundColor: "#009100", color: "white", fontColor: "#009100" },
  ]


  return (
    <div className="pane-content-warp">
      <div className="table-list">
        <div>
          <h3 style={{ marginBottom: 2 }}><b>開盤價 : </b>{numberInfo.openingPrice}</h3>
          <table>
            <tbody>
            <tr>
              <th>分價</th>
              <th>數值</th>
            </tr>
            {
              priceCalculatedInfo.map(info => (
                <tr>
                  <th style={{ backgroundColor: info.backgroundColor, color: info.color }}>
                    {info.percent.toFixed(2)} %
                  </th>
                  <td style={{ color: info.fontColor, fontWeight: 600 }}>
                    {new Decimal(numberInfo.openingPrice).mul(100 + info.percent).div(100).toFixed(2)}
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        <div>
          <h3 style={{ marginBottom: 2 }}><b>即時價 : </b>{numberInfo.extremePrice} (+0.23%價)</h3>
          <table>
            <tbody>
            <tr>
              <th colSpan={2}>分價</th>
              <th>數值</th>
            </tr>
            <tr>
              <th rowSpan={Math.ceil(extremePriceCalculatedInfo.length / 2)}/>
            </tr>
            {
              extremePriceCalculatedInfo.map((info, index) => {
                console.log("new Decimal(100.23).minus(info.percent).div(100)", info.percent, new Decimal(100.23).minus(info.percent).div(100).toNumber())
                console.log("value", numberInfo.extremePrice, numberInfo.extremePrice >= 0, new Decimal(numberInfo.extremePrice).div(new Decimal(100.23).minus(info.percent).div(100)).toFixed(2))

                return (
                  <tr>
                    {index === Math.floor(extremePriceCalculatedInfo.length / 2) && <th>計算價</th>}
                    {index === Math.ceil(extremePriceCalculatedInfo.length / 2) &&
                      <th rowSpan={extremePriceCalculatedInfo.length / 2}/>}
                    <th style={{ backgroundColor: info.backgroundColor, color: info.color }}>
                      {info.percent.toFixed(2)} %
                    </th>
                    <td style={{ color: info.fontColor, fontWeight: 600 }}>
                      {
                        info.percent >= 0
                          ? new Decimal(numberInfo.extremePrice).mul(100.23 + info.percent).div(100).toFixed(2)
                          : new Decimal(numberInfo.extremePrice).div(new Decimal(100.23).minus(info.percent).div(100)).toFixed(2)
                      }
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
      <FooterPane
        numberInfo={numberInfo}
        setNumberInfo={setNumberInfo}
      />
    </div>
  );
}

export default PaneContent;
