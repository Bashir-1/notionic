// https://react-svgr.com/playground/
import * as React from 'react'

const Avatar = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 500 500'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <path
      id='blob'
      fill='purple'
      style={{
        opacity: '0.02'
      }}
    >
      <animate
        attributeName='d'
        dur='25s'
        repeatCount='indefinite'
        values='M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z'
      ></animate>
    </path>
    <path
      id='blob'
      fill='yellow'
      style={{
        opacity: '0.04'
      }}
    >
      <animate
        attributeName='d'
        dur='25s'
        repeatCount='indefinite'
        values='M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z'
      ></animate>
    </path>
    <path
      id='blob'
      fill='orange'
      style={{
        opacity: '0.06'
      }}
    >
      <animate
        attributeName='d'
        dur='25s'
        repeatCount='indefinite'
        values='M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z'
      ></animate>
    </path>
    <path
      id='blob'
      fill='red'
      style={{
        opacity: '0.08'
      }}
    >
      <animate
        attributeName='d'
        dur='25s'
        repeatCount='indefinite'
        values='M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z'
      ></animate>
    </path>
    <path
      id='blob'
      fill='blue'
      style={{
        opacity: '0.10'
      }}
    >
      <animate
        attributeName='d'
        dur='25s'
        repeatCount='indefinite'
        values='M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z'
      ></animate>
    </path>
    <g
      transform='translate(180,300) scale(0.080000,-0.080000)'
      fill='currentColor'
      style={{
        opacity: '0.8'
      }}
    >
      <path d='M762 1203 c-6 -15 -13 -46 -17 -68 -4 -22 -13 -49 -20 -61 -15 -23 -122 -69 -257 -109 -49 -14 -88 -28 -88 -29 0 -2 33 -20 73 -40 49 -24 87 -36 115 -36 28 0 42 -4 42 -13 0 -34 -295 -517 -390 -639 -40 -52 -4 -28 86 56 49 46 105 109 124 141 19 31 64 98 100 148 77 108 125 186 173 283 20 39 46 78 59 86 13 8 69 34 126 58 107 45 118 57 110 111 -3 21 -10 25 -78 34 l-75 10 -5 45 c-5 42 -7 45 -36 48 -26 3 -33 -1 -42 -25z' />
      <path d='M754 616 c-40 -19 -88 -39 -108 -46 -43 -14 -45 -30 -7 -72 25 -28 33 -31 80 -30 39 1 54 -3 58 -15 7 -18 -30 -140 -58 -192 -36 -67 6 -93 135 -84 l86 6 0 -26 c0 -14 -4 -37 -10 -51 -5 -14 -8 -26 -6 -26 7 0 110 68 129 85 11 10 17 30 17 60 0 62 -22 70 -150 57 -52 -5 -98 -6 -103 -2 -4 3 3 31 16 61 13 30 32 78 42 108 10 30 28 70 41 89 26 38 30 63 14 93 -17 31 -91 25 -176 -15z' />
    </g>
    {/* <image
      x='0'
      y='0'
      width='100%'
      height='100%'
      clip-path='url(#shape)'
      href='https://'
      preserveAspectRatio='none'
      style={{
        opacity: '0.6'
      }}
    ></image> */}
    {/* <clipPath id='shape'>
      <path id='blob'>
        <animate attributeName='d' dur='10s' repeatCount='indefinite' values='M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;'></animate>
      </path>
    </clipPath> */}
  </svg>
)

export default Avatar