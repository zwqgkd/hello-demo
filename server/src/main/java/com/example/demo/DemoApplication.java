package com.example.demo;

import com.sun.jna.Memory;
import com.sun.jna.Pointer;
import deeplearningmodule.ObjectDetector;
import elementdetectmodule.Circle;
import elementdetectmodule.EDCircle;
import elementdetectmodule.ParamOfSameCenterCircle;
import opencvmodule.dlltest;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Base64;
import java.util.Objects;
import java.util.Stack;
import java.util.UUID;

import com.corundumstudio.socketio.listener.*;
import com.corundumstudio.socketio.*;

@SpringBootApplication
@RestController
@CrossOrigin
public class DemoApplication {
	private static String imagePath;
	static{
		System.loadLibrary(Core.NATIVE_LIBRARY_NAME); }
	public static void main(String[] args) {
		com.corundumstudio.socketio.Configuration config = new Configuration();
		config.setHostname("localhost");
		config.setPort(9092);
		final SocketIOServer server = new SocketIOServer(config);
		server.addEventListener("chatevent", ChatObject.class, new DataListener<ChatObject>() {
			@Override
			public void onData(SocketIOClient client, ChatObject data, AckRequest ackRequest) {
				if(data.getUserName().equals("Num"))
					System.out.print("数字测试，数字是："+data.getMessage());
				else if(data.getUserName().equals("Str"))
					System.out.println("字符串测试，字符串是："+data.getMessage());
				else if(data.getUserName().equals("Int")) {
					int result = Integer.parseInt(data.getMessage());
					System.out.println("integer测试：" + result);
				}
				else if(data.getUserName().equals("Dou")) {
					double result = Double.parseDouble(data.getMessage());
					System.out.println("double测试："+result);
				}
				else if(data.getUserName().equals("Flt")){
					float result = Float.parseFloat(data.getMessage());
					System.out.println("float测试："+result);
				}
				else if(data.getUserName().equals("Pic"))
				{
					Base64.Decoder decoder = Base64.getDecoder();
					String ImgBase64 = data.getMessage().replace("data:image/png;base64,","");
					try
					{
						//Base64解码
						byte[] b = decoder.decode(ImgBase64);
						for(int i=0;i<b.length;++i)
						{
							if(b[i]<0)
							{//调整异常数据
								b[i]+=256;
							}
						}
						//生成jpeg图片
						String imgFilePath = "E:\\"+UUID.randomUUID().toString()+".jpg";//新生成的图片
						OutputStream out = new FileOutputStream(imgFilePath);
						out.write(b);
						out.flush();
						out.close();
						System.out.println("图片接收成功");
					}
					catch (Exception e)
					{
						System.out.println("图片接收失败");
					}

				}

			}
		});

		server.addEventListener("flowInformation", demoMessage.class, new DataListener<demoMessage>() {
			private String imagePath;

			@Override
			public void onData(SocketIOClient client, demoMessage dm, AckRequest ackRequest) {
				int amount = dm.getNodesNum();
				System.out.println("nodes amount:"+amount);
				FlowInformation [] fl = new FlowInformation[amount];

				for(int i = 0;i<dm.getNodesNum();i++)
				{
					fl[i] = new FlowInformation();
					fl[i].setId(dm.getNodes().get(i).getId());
					fl[i].setFunction(dm.getNodes().get(i).getFunc());
					for (int j = 0;j<dm.getEdgesNum();j++)
					{
						if(Objects.equals(fl[i].getId(), dm.getEdges().get(j).getTargetNodeId()))
						{
							fl[i].setFather(dm.getEdges().get(j).getSourceNodeId());
						}
					}
				}
				Stack<FlowInformation> Tree = new Stack();
				String leaf[]=new String[]{"3"};
				int i=0;
				while (i<leaf.length){
					FlowInformation  treenode =findnode(fl,leaf[i]);//获得叶子节点
					while (treenode.getFather()!=null)//判断其有无父节点
					{
						Tree.push(treenode);//入栈
						String Father = (String)treenode.getFather();
						treenode = findnode(fl,Father);//获取其父节点
					}
					Tree.push(treenode);//根节点入栈
					Mat imageMat=new Mat();
					Mat imageMatRet=new Mat();
					Mat input=new Mat();
					Mat result=new Mat();
					Mat EDCircleInput=new Mat();
					ParamOfSameCenterCircle.ByValue Param  = new ParamOfSameCenterCircle.ByValue();
					while(!Tree.isEmpty()){
						treenode =Tree.pop();
						String Function1 = (String) treenode.getFunction();
						//先判断该节点是否已经有图像，若没有，则执行函数
						//执行函数
						if(Function1.equalsIgnoreCase("图像源"))
						{System.out.println("打开图片");
							//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
							//System.out.println("参数为"+ParameterArray.get(0));
							System.out.println("this.imagePath:"+this.imagePath);
							dlltest.imgcodes.INSTANCE.myLoad(imagePath,3,imageMat.getNativeObjAddr());
							dlltest.imgcodes.INSTANCE.myLoad(imagePath,0,input.getNativeObjAddr());
							dlltest.imgcodes.INSTANCE.myLoad(imagePath,3,EDCircleInput.getNativeObjAddr());
							// EDCircle
							Param.matAddress = EDCircleInput.getNativeObjAddr();
							Pointer center = new Memory(16);
							center.setDouble(0,300);
							center.setDouble(8,300);
							Param.center = center;
							Param.R = 60.0;
							Param.magnification = 120.0 / 60.0;
						}
						else if(Function1.equalsIgnoreCase("图像滤波"))
						{
							System.out.println("图像滤波");
							//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
							//System.out.println("参数1为"+ParameterArray.get(0)+"参数2为"+ParameterArray.get(1));

							//ObjectDetector.DLLMul.dllMul.objectDetectionMat(imageMat.getNativeObjAddr(),imageMatRet.getNativeObjAddr(),"C:\\Users\\asus\\Desktop\\SOW\\SOW_server\\src\\main\\resources\\mywork_dir");
							//dlltest.imgcodes.INSTANCE.myWrite("ret.jpg",imageMatRet.getNativeObjAddr());
							dlltest.dllexport.INSTANCE.myMedianBlur(input.getNativeObjAddr(),result.getNativeObjAddr(),15);
							dlltest.imgcodes.INSTANCE.myWrite("mediafileter.jpg",result.getNativeObjAddr());
							Circle.ByValue EDCircleResult = EDCircle.EDCircleBySameCenterCircle.INSTANCE.EDCircle(Param);
							System.out.println(EDCircleResult.x);
							System.out.println(EDCircleResult.y);
							System.out.println(EDCircleResult.r);
							System.out.println(EDCircleResult.isCircle);
						}
						else{
							System.out.println("执行其他函数");
							//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
							//System.out.println("参数1为"+ParameterArray.get(0)+"参数2为"+ParameterArray.get(1));
						}//执行函数完毕
					}
					i++;
				}
			}
		});


		server.start();
		SpringApplication.run(DemoApplication.class, args);
	}
	/*
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("give Hello %s!", name);
	}
	@RequestMapping("/hello")
	public String hello_req(@RequestParam(value = "name", defaultValue = "World") String name) {
		System.out.println("Recieve"+name);
		return String.format("get Hello %s!", name);
	}
	@RequestMapping("/JsonTest")
	//public void JsonReq(@RequestBody JsonMessage jm){
	//	System.out.println("The text is "+jm.getText()+" and the number is "+jm.getNum());
	//}
	*/
	public void JsonReq(@RequestBody demoMessage dm){
		int amount = dm.getNodesNum();
		FlowInformation [] fl = new FlowInformation[amount];

		for(int i = 0;i<dm.getNodesNum();i++)
		{
			fl[i] = new FlowInformation();
			fl[i].setId(dm.getNodes().get(i).getId());
			fl[i].setFunction(dm.getNodes().get(i).getFunc());
			for (int j = 0;j<dm.getEdgesNum();j++)
			{
				if(Objects.equals(fl[i].getId(), dm.getEdges().get(j).getTargetNodeId()))
				{
					fl[i].setFather(dm.getEdges().get(j).getSourceNodeId());
				}
			}
		}
		Stack<FlowInformation> Tree = new Stack();
		String leaf[]=new String[]{"3"};
		int i=0;
		while (i<leaf.length){
			FlowInformation  treenode =findnode(fl,leaf[i]);//获得叶子节点
			while (treenode.getFather()!=null)//判断其有无父节点
			{
				Tree.push(treenode);//入栈
				String Father = (String)treenode.getFather();
				treenode = findnode(fl,Father);//获取其父节点
			}
			Tree.push(treenode);//根节点入栈
			Mat imageMat=new Mat();
			Mat imageMatRet=new Mat();
			Mat input=new Mat();
			Mat result=new Mat();
            Mat EDCircleInput=new Mat();
            ParamOfSameCenterCircle.ByValue Param  = new ParamOfSameCenterCircle.ByValue();
			while(!Tree.isEmpty()){
				treenode =Tree.pop();
				String Function1 = (String) treenode.getFunction();
				//先判断该节点是否已经有图像，若没有，则执行函数
				//执行函数
				if(Function1.equalsIgnoreCase("图像源"))
				{System.out.println("打开图片");
					//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
					//System.out.println("参数为"+ParameterArray.get(0));
					System.out.println("this.imagePath:"+this.imagePath);
					dlltest.imgcodes.INSTANCE.myLoad(imagePath,3,imageMat.getNativeObjAddr());
					dlltest.imgcodes.INSTANCE.myLoad(imagePath,0,input.getNativeObjAddr());
					dlltest.imgcodes.INSTANCE.myLoad(imagePath,3,EDCircleInput.getNativeObjAddr());
					// EDCircle
					Param.matAddress = EDCircleInput.getNativeObjAddr();
					Pointer center = new Memory(16);
					center.setDouble(0,300);
					center.setDouble(8,300);
					Param.center = center;
					Param.R = 60.0;
					Param.magnification = 120.0 / 60.0;
				}
				else if(Function1.equalsIgnoreCase("图像滤波"))
				{
					System.out.println("图像滤波");
					//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
					//System.out.println("参数1为"+ParameterArray.get(0)+"参数2为"+ParameterArray.get(1));

					//ObjectDetector.DLLMul.dllMul.objectDetectionMat(imageMat.getNativeObjAddr(),imageMatRet.getNativeObjAddr(),"C:\\Users\\asus\\Desktop\\SOW\\SOW_server\\src\\main\\resources\\mywork_dir");
					//dlltest.imgcodes.INSTANCE.myWrite("ret.jpg",imageMatRet.getNativeObjAddr());
					dlltest.dllexport.INSTANCE.myMedianBlur(input.getNativeObjAddr(),result.getNativeObjAddr(),15);
					dlltest.imgcodes.INSTANCE.myWrite("mediafileter.jpg",result.getNativeObjAddr());
					Circle.ByValue EDCircleResult = EDCircle.EDCircleBySameCenterCircle.INSTANCE.EDCircle(Param);
					System.out.println(EDCircleResult.x);
					System.out.println(EDCircleResult.y);
					System.out.println(EDCircleResult.r);
					System.out.println(EDCircleResult.isCircle);
				}
				else{
					System.out.println("执行其他函数");
					//JsonArray ParameterArray = treenode.getJsonArray("ParameterArray");
					//System.out.println("参数1为"+ParameterArray.get(0)+"参数2为"+ParameterArray.get(1));
				}//执行函数完毕
			}
			i++;
		}
	}
	/*
	@RequestMapping("/GetJson")
	public JsonMessage JsonRtr(){
		JsonMessage jm = new JsonMessage(1998,"Return txt");
		return jm;
	}

	@RequestMapping("/addImage")
	@ResponseBody
	public String addImage(@RequestParam(name = "image_data", required = false) MultipartFile file) {
		//文件上传
		String newCompanyImageName = "";
		if (!file.isEmpty()) {
			try {
				//图片命名
				G:
				newCompanyImageName = UUID.randomUUID().toString()+".jpg";
				String newCompanyImagepath = "C:\\"+newCompanyImageName;
				this.imagePath=newCompanyImagepath;
				File newFile = new File(newCompanyImagepath);
				if (!newFile.exists()) {
					newFile.createNewFile();
				}
				BufferedOutputStream out = new BufferedOutputStream(
						new FileOutputStream(newFile));
				out.write(file.getBytes());
				out.flush();
				out.close();
				System.out.println("newCompanyImageName:"+newCompanyImageName);

				//imagePath=newCompanyImageName;
				return newCompanyImageName;
			} catch (FileNotFoundException e) {
				e.printStackTrace();
				System.out.println("newCompanyImageName:"+newCompanyImageName);
				return newCompanyImageName;
			} catch (IOException e) {
				e.printStackTrace();
				return "图片上传失败！";
			}
		}
		return "图片上传失败！";
	}
	*/
	@RequestMapping("/download")
	public void download(HttpServletResponse response) throws Exception {
		//这里写要让前端下载的文件的路径
		File file = new File("G:/MyUploader-master.zip");
		//设置编码格式，防止下载的文件内乱码
		response.setCharacterEncoding("UTF-8");
		//获取路径文件对象
		String realFileName = file.getName();
		//设置响应头类型，这里可以根据文件类型设置，text/plain、application/vnd.ms-excel等
		response.setHeader("content-type", "application/octet-stream;charset=UTF-8");
		response.setContentType("application/octet-stream;charset=UTF-8");
		//如果不设置响应头大小，可能报错：“Excel 已完成文件级验证和修复。此工作簿的某些部分可能已被修复或丢弃”
		response.addHeader("Content-Length", String.valueOf(file.length()));
		try{
		//Content-Disposition的作用：告知浏览器以何种方式显示响应返回的文件，用浏览器打开还是以附件的形式下载到本地保存
		//attachment表示以附件方式下载   inline表示在线打开   "Content-Disposition: inline; filename=文件名.mp3"
		// filename表示文件的默认名称，因为网络传输只支持URL编码的相关支付，因此需要将文件名URL编码后进行传输,前端收到后需要反编码才能获取到真正的名称
		response.setHeader("Content-Disposition", "attachment;filename=" + java.net.URLEncoder.encode(realFileName.trim(), "UTF-8"));
	} catch (UnsupportedEncodingException e1) {
		e1.printStackTrace();
	}
	//初始化文件流字节缓存
		//开始写入
		OutputStream os = response.getOutputStream();
		//写入完成，创建文件流
		BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file));
	byte[] buff = new byte[1024];
        try {
		// bis.read(data)：将字符读入数组。在某个输入可用、发生I/O错误或者已到达流的末尾前，此方法一直阻塞。
		// 读取的字符数，如果已到达流的末尾，则返回 -1
		int i = bis.read(buff);
		while (i != -1) {
			os.write(buff, 0, buff.length);
			os.flush();
			i = bis.read(buff);
		}
	}catch (Exception e){
		e.printStackTrace();
	}finally {
		if (bis != null) {
			try {
				bis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}

	public static FlowInformation findnode(FlowInformation[] nodes, String name){
		FlowInformation tar =new FlowInformation();
		tar =null;
		for (int i=0;i<nodes.length;i++){
			if (nodes[i].getId().equalsIgnoreCase(name))
				return nodes[i];
		}
		return tar;
	}
}
