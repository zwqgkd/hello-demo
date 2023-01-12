package elementdetectmodule;

import com.sun.jna.Library;
import com.sun.jna.Native;


/**
 * Created by XXX.
 */


public class EDCircle{
    public interface EDCircleBySameCenterCircle extends Library {

        EDCircleBySameCenterCircle INSTANCE = (EDCircleBySameCenterCircle) Native.load("EDCircle.dll", EDCircleBySameCenterCircle.class); // 引入库文件

        public Circle.ByValue EDCircle(ParamOfSameCenterCircle.ByValue l);
    }

}


