import FilterBox from "../centara_ras_fushi/filter-box/index";
import WhatsIncluded from "../centara_ras_fushi/whatsIncluded";
const SidebarRight = ({ holiday }) => {
  return (
    <div className="ml-50 lg:ml-0">
      <div className="px-30 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center justify-between">
          <div>
            <span className="text-14 text-light-1 ml-5">From </span>
            <span className="text-20 fw-500">£ {holiday?.price}</span>
          </div>
          

          
          <div className="d-flex items-center">
            
            <div className="size-40 flex-center bg-blue-1 rounded-4">
              <div className="text-14 fw-600 text-white">{holiday?.ratings}</div>
            </div>
          </div>
          
        </div>
        {/* End d-flex */}



        <WhatsIncluded/>
        <div className="row y-gap-20 pt-30">
          
          <FilterBox holiday={holiday} />
          
        </div>
      </div>
      {/* End px-30 FilterBox */}
    </div>
  );
};

export default SidebarRight;
