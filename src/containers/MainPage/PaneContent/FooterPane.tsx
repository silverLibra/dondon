import React, { ChangeEvent, useState } from 'react';
import SVGArrowDown from "@component/SVG/SVGArrowDown"
import { Form, Input } from "antd"
import { numberInfoType } from "@containers/MainPage/PaneContent/types"


type propsType = {
  numberInfo: numberInfoType,
  setNumberInfo: React.Dispatch<React.SetStateAction<numberInfoType>>
}

const FooterPane = (props: propsType) => {
  const { numberInfo, setNumberInfo } = props
  const [show, setShow] = useState(true)
  const divCss = show ? { height: '30%', opacity: 1 } : { height: '5%', opacity: 1 }

  const onChangeHandle = (key: keyof numberInfoType) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setNumberInfo(prevState => ({ ...prevState, [key]: isNaN(Number(event.target.value)) ? 0 : Number(event.target.value) }))
    }
  }

  return (
    <div className="footer-pane-warp" style={divCss}>
      <div className="content">
        <Form>
          <Form.Item style={{ marginBottom: 5 }}>
            <Input addonBefore={"開盤價"}
                   type={"number"}
                   value={numberInfo.openingPrice}
                   size="large"
                   onChange={onChangeHandle("openingPrice")}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 5 }}>
            <Input
              addonBefore={"即時價"}
              type={"number"}
              value={numberInfo.extremePrice}
              size="large"
              onChange={onChangeHandle("extremePrice")}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 5 }}>
            <Input
              addonBefore={"計算價"}
              type={"number"}
              value={numberInfo.calculatedPercent}
              size="large"
              addonAfter="％"
              onChange={onChangeHandle("calculatedPercent")}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FooterPane;
