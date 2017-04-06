Search.setIndex({envversion:49,filenames:["api/analysis","api/bau","api/cost","api/damage","api/damage_simulation","api/forcing","api/index","api/optimization","api/storage_tree","api/tools","api/tree","api/utility","examples/output_paper","index","installation","overview","tutorials/analysis","tutorials/bau","tutorials/cost","tutorials/damage","tutorials/damage_simulation","tutorials/forcing","tutorials/optimization","tutorials/storage_tree","tutorials/tools","tutorials/tree","tutorials/utility"],objects:{"dlw.analysis":{additional_ghg_emission:[0,1,1,""],constraint_first_period:[0,1,1,""],delta_consumption:[0,1,1,""],find_bec:[0,1,1,""],find_ir:[0,1,1,""],find_term_structure:[0,1,1,""],perpetuity_yield:[0,1,1,""],save_output:[0,1,1,""],save_sensitivity_analysis:[0,1,1,""],store_trees:[0,1,1,""]},"dlw.bau":{BusinessAsUsual:[1,2,1,""],DLWBusinessAsUsual:[1,2,1,""]},"dlw.bau.BusinessAsUsual":{emission_by_decisions:[1,3,1,""],emission_by_time:[1,4,1,""],emission_per_period:[1,3,1,""],emission_to_bau:[1,3,1,""],emission_to_ghg:[1,3,1,""],ghg_end:[1,3,1,""],ghg_start:[1,3,1,""]},"dlw.bau.DLWBusinessAsUsual":{bau_emissions_setup:[1,4,1,""],emission_by_decisions:[1,3,1,""],emission_by_time:[1,4,1,""],emission_per_period:[1,3,1,""],emission_to_bau:[1,3,1,""],emission_to_ghg:[1,3,1,""],emit_level:[1,3,1,""],emit_time:[1,3,1,""],ghg_end:[1,3,1,""],ghg_start:[1,3,1,""]},"dlw.cost":{Cost:[2,2,1,""],DLWCost:[2,2,1,""]},"dlw.cost.Cost":{cost:[2,4,1,""],price:[2,4,1,""]},"dlw.cost.DLWCost":{a:[2,3,1,""],cons_at_0:[2,3,1,""],cost:[2,4,1,""],g:[2,3,1,""],max_price:[2,3,1,""],price:[2,4,1,""],tech_const:[2,3,1,""],tech_scale:[2,3,1,""],tree:[2,3,1,""]},"dlw.damage":{DLWDamage:[3,2,1,""],Damage:[3,2,1,""]},"dlw.damage.DLWDamage":{average_mitigation:[3,4,1,""],average_mitigation_node:[3,4,1,""],bau:[3,3,1,""],cons_growth:[3,3,1,""],cum_forcing:[3,3,1,""],d:[3,3,1,""],damage_coefs:[3,3,1,""],damage_function:[3,4,1,""],damage_simulation:[3,4,1,""],dnum:[3,3,1,""],forcing:[3,3,1,""],ghg_level:[3,4,1,""],ghg_level_period:[3,4,1,""],ghg_levels:[3,3,1,""],import_damages:[3,4,1,""],tree:[3,3,1,""]},"dlw.damage.Damage":{average_mitigation:[3,4,1,""],bau:[3,3,1,""],damage_function:[3,4,1,""],tree:[3,3,1,""]},"dlw.damage_simulation":{DamageSimulation:[4,2,1,""]},"dlw.damage_simulation.DamageSimulation":{cons_growth:[4,3,1,""],d:[4,3,1,""],disaster_tail:[4,3,1,""],ghg_levels:[4,3,1,""],maxh:[4,3,1,""],peak_temp:[4,3,1,""],simulate:[4,4,1,""],temp_dist_params:[4,3,1,""],temp_map:[4,3,1,""],tip_on:[4,3,1,""],tree:[4,3,1,""]},"dlw.forcing":{Forcing:[5,2,1,""]},"dlw.forcing.Forcing":{absorbtion_p1:[5,3,1,""],absorbtion_p2:[5,3,1,""],forcing_at_node:[5,5,1,""],forcing_p1:[5,3,1,""],forcing_p2:[5,3,1,""],forcing_p3:[5,3,1,""],forcing_start:[5,3,1,""],ghg_level_at_node:[5,5,1,""],lsc_p1:[5,3,1,""],lsc_p2:[5,3,1,""],sink_start:[5,3,1,""]},"dlw.optimization":{GenericAlgorithm:[7,2,1,""],GradientSearch:[7,2,1,""],NodeMaximum:[7,2,1,""]},"dlw.optimization.GenericAlgorithm":{bound:[7,3,1,""],cx_prob:[7,3,1,""],fixed_indicies:[7,3,1,""],fixed_values:[7,3,1,""],mut_prob:[7,3,1,""],num_feature:[7,3,1,""],num_generations:[7,3,1,""],pop_amount:[7,3,1,""],print_progress:[7,3,1,""],run:[7,4,1,""],u:[7,3,1,""]},"dlw.optimization.GradientSearch":{accuracy:[7,3,1,""],fixed_indicies:[7,3,1,""],fixed_values:[7,3,1,""],gradient_descent:[7,4,1,""],learning_rate:[7,3,1,""],numerical_gradient:[7,4,1,""],print_progress:[7,3,1,""],run:[7,4,1,""],scale_alpha:[7,3,1,""],utility:[7,3,1,""],var_nums:[7,3,1,""]},"dlw.optimization.NodeMaximum":{run:[7,5,1,""]},"dlw.storage_tree":{BaseStorageTree:[8,2,1,""],BigStorageTree:[8,2,1,""],SmallStorageTree:[8,2,1,""]},"dlw.storage_tree.BaseStorageTree":{decision_times:[8,3,1,""],get_next_period_array:[8,4,1,""],information_times:[8,3,1,""],is_decision_period:[8,4,1,""],is_information_period:[8,4,1,""],is_real_decision_period:[8,4,1,""],last:[8,3,1,""],last_period:[8,3,1,""],nodes:[8,3,1,""],periods:[8,3,1,""],set_value:[8,4,1,""],tree:[8,3,1,""],write_columns:[8,4,1,""],write_columns_existing:[8,4,1,""],write_tree:[8,4,1,""]},"dlw.storage_tree.BigStorageTree":{between_decision_times:[8,4,1,""],decision_interval:[8,4,1,""],decision_times:[8,3,1,""],first_period_intervals:[8,3,1,""],get_next_period_array:[8,4,1,""],information_times:[8,3,1,""],periods:[8,3,1,""],subintervals_len:[8,3,1,""],tree:[8,3,1,""]},"dlw.storage_tree.SmallStorageTree":{decision_times:[8,3,1,""],get_next_period_array:[8,4,1,""],index_below:[8,4,1,""],information_times:[8,3,1,""],periods:[8,3,1,""],tree:[8,3,1,""]},"dlw.tools":{append_to_existing:[9,1,1,""],create_file:[9,1,1,""],file_exists:[9,1,1,""],find_path:[9,1,1,""],import_csv:[9,1,1,""],load_csv:[9,1,1,""],plot:[9,1,1,""],plot_dict:[9,1,1,""],plot_first_order_condition:[9,1,1,""],plot_mitigation_at_node:[9,1,1,""],write_columns_csv:[9,1,1,""],write_columns_to_existing:[9,1,1,""]},"dlw.tree":{TreeModel:[10,2,1,""]},"dlw.tree.TreeModel":{decision_times:[10,3,1,""],final_states_prob:[10,3,1,""],get_node:[10,4,1,""],get_nodes_in_period:[10,4,1,""],get_num_nodes_period:[10,4,1,""],get_parent_node:[10,4,1,""],get_path:[10,4,1,""],get_period:[10,4,1,""],get_probs_in_period:[10,4,1,""],get_state:[10,4,1,""],node_prob:[10,3,1,""],num_decision_nodes:[10,3,1,""],num_final_states:[10,3,1,""],num_periods:[10,3,1,""],prob_scale:[10,3,1,""],reachable_end_states:[10,4,1,""]},"dlw.utility":{EZUtility:[11,2,1,""],Utility:[11,2,1,""]},"dlw.utility.EZUtility":{a:[11,3,1,""],add_penalty_cost:[11,3,1,""],adjusted_utility:[11,4,1,""],b:[11,3,1,""],cons_growth:[11,3,1,""],cost:[11,3,1,""],damage:[11,3,1,""],decision_times:[11,3,1,""],growth_term:[11,3,1,""],marginal_utility:[11,4,1,""],max_penalty:[11,3,1,""],penalty_cost:[11,4,1,""],penalty_scale:[11,3,1,""],period_len:[11,3,1,""],r:[11,3,1,""],tree:[11,3,1,""],utility:[11,4,1,""]},"dlw.utility.Utility":{adjusted_utility:[11,4,1,""],cons_growth:[11,3,1,""],cost:[11,3,1,""],damage:[11,3,1,""],decision_times:[11,3,1,""],growth_term:[11,3,1,""],marginal_utility:[11,4,1,""],period_len:[11,3,1,""],tree:[11,3,1,""],utility:[11,4,1,""]},dlw:{analysis:[0,0,0,"-"],bau:[1,0,0,"-"],cost:[2,0,0,"-"],damage:[3,0,0,"-"],damage_simulation:[4,0,0,"-"],forcing:[5,0,0,"-"],optimization:[7,0,0,"-"],storage_tree:[8,0,0,"-"],tools:[9,0,0,"-"],tree:[10,0,0,"-"],utility:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:classmethod"},terms:{"30460bn":2,"abstract":[1,2,3,8,11],"class":[0,1,2,3,4,5,6,7,8,10,11],"default":[1,2],"final":[0,7,11],"float":[0,1,2,3,4,5,7,8,10,11],"function":[0,2,3,4,6,7],"import":[3,15],"int":[0,1,2,3,4,5,7,8,10,11],"new":[0,7,8],"return":[0,1,2,3,4,5,7,8,10,11],"true":[3,4,7,8,9,11],about:[2,8,15],abov:7,absenc:1,absorbt:5,absorbtion_p1:5,absorbtion_p2:5,accuraci:7,across:[11,15],action:3,actual:25,add:4,add_penalty_cost:11,addit:[0,4],additional_ghg_emiss:0,adjust:11,adjusted_util:11,agent:[8,15],aim:13,algorithm:7,all:[2,3],allow:11,along:[],alpha:11,alreadi:8,also:[0,8,15],among:7,amount:7,analyz:13,ani:[1,2,15],append:0,append_to_exist:9,apply:13,appropri:[],arbitrari:0,argument:0,arr:11,arrai:[0,3,4,5,7,8,10,11,25],ask:[],asset:[13,15],assum:1,assume:11,assumpt:1,atmospher:2,attempt:1,ave_mitig:2,averag:[0,1,2,3],average_mitig:[2,3],average_mitigation_nod:3,avers:[11,15],back:7,backstop:15,baker:[3,4],base:[0,1,2,3,4,5,7,8,10,11,13,15],basestoragetre:[0,8,11],basic:13,bau_emissions_setup:1,becom:11,begin:1,behavior:15,below:11,besid:8,best:[7,10],beta:11,between:[8,15],between_decision_tim:8,bigstoragetre:[0,8,11],bodi:15,bond:[0,11],bool:[3,4,7,8,11],bound:7,brachn:25,break_at:9,bst:[8,11],bua:[],build:14,busi:[1,3],businessasusu:[1,3],calcul:[0,2,3,5,7,11],calculcul:11,calibr:13,call:0,can:[2,10,11,25],candid:7,carbon:[2,15],carlo:[3,4],ce_tre:[0,11],certain:[0,11],chang:[0,2,4,7,15],check:8,child:10,choos:[],classmethod:[5,7],climat:[4,13,15],clone:14,close:[],co2:15,coeffici:[3,4],coeffieci:3,column:8,combin:7,come:10,comment:9,compat:14,compon:0,condit:4,conflat:15,cons_at_0:2,cons_growth:[3,4,11],cons_tre:[0,11],consist:15,constant:[1,3,5,10,11,15],constrain:0,constraint_cost:0,constraint_first_period:0,consumpt:[0,2,3,4,11,15],contain:6,contrast:15,control:11,convert:1,correspond:3,cost_tre:[0,11],coupon:11,cov:0,creat:[0,1,4,8],create_fil:9,cross:[0,7],csv:9,cum_forc:3,cumul:3,current:[0,2,3,8,11],curv:2,curvatur:[2,3,4],custom:[],cx_prob:7,damage_coef:3,damage_funct:3,damagesimul:[3,4],daniel:13,data:[0,3,8,9],deap:[],decis:[1,8,10,11],decision_interv:8,decision_tim:[8,10,11],declar:11,declin:15,decomposit:11,decreas:4,defin:[3,4],degre:2,delimit:[8,9],delta:[0,7],delta_consumpt:0,delta_m:0,descent:7,descript:[6,8],detail:[2,15,25],determin:2,develop:15,dict:8,dictionari:[8,9],differ:[0,11],dimens:4,dioxid:[2,15],direct:7,directori:[0,3,8,9],disaster_tail:[3,4],discount:0,discret:15,displac:[3,4],distant:15,distribut:[3,4],dlwbusinessasusu:1,dlwcost:2,dlwdamag:3,dnum:3,doc:[],doe:[3,25],done:8,down:[0,1],download:14,draw:[3,4],drawn:4,each:[1,3,4,5,7],easy_instal:[],econom:4,effect:15,either:[3,4],elast:11,element:[7,8],els:[7,8,11],emb:15,embed:0,emiss:[0,1,2,3,5,13,15],emission:1,emission_by_decis:1,emission_by_tim:1,emission_per_period:1,emission_to_bau:1,emission_to_ghg:1,emit:15,emit_at_0:2,emit_level:1,emit_tim:1,enabl:[],encourag:14,end:[0,1,3,4,10],engin:4,epstein:[11,15],equal:[0,15],equival:[0,11],evalu:[2,7],eventu:15,everi:[0,3,11],evolut:7,evolutionari:[],exampl:[8,10,11],exist:[3,8],exogen:[1,2],expect:[0,15],explicitli:[],explor:15,extend:2,ezu:11,ezutiliti:[0,11],fals:[3,7,8,9,11],far:2,fastest:7,featur:15,file:[0,3,8],file_exist:9,file_nam:[0,3,8,9],file_typ:9,final_cons_ep:11,final_states_prob:10,financ:15,find:[0,11],find_bec:0,find_ir:0,find_path:9,find_term_structur:0,first:[0,7,8,10,13],first_nod:0,first_period_consadj:11,first_period_interv:8,fit:7,fix:7,fixed_indici:7,fixed_valu:7,flag:[3,4],follow:4,forcing_at_nod:5,forcing_p1:5,forcing_p2:5,forcing_p3:5,forcing_start:5,forward:0,fragil:8,framework:13,from:[0,1,2,3,4,7,8,10,11],furthermor:0,futher:15,futur:[1,10,11,15],gamma:[3,4],gener:7,genericalgorithm:7,gernot:13,get:[3,4,10],get_next_period_arrai:8,get_nod:10,get_nodes_in_period:10,get_num_nodes_period:10,get_parent_nod:10,get_path:10,get_period:10,get_probs_in_period:10,get_stat:10,ghg:[0,1,2,3,4,5,11],ghg_end:1,ghg_level:[3,4],ghg_level_at_nod:5,ghg_level_period:3,ghg_start:1,give:[0,2],given:[0,2,3,4,8,10,11,15],global:15,gradient:7,gradient_desc:7,gradientsearch:7,gradual:15,greenhous:[13,15],growth:[1,3,4,11],growth_term:11,guess:[0,7],half:[3,4],have:[11,25],header:[8,9],henc:[11,25],here:[],high:15,highest:7,horizon:2,how:11,howev:4,http:[],ignor:9,impact:4,implement:[],impli:[2,3,4],implic:15,import_csv:9,import_damag:3,improv:2,incent:1,includ:[11,15],inconsist:15,increas:[0,7,11],index:[8,9],index_below:8,indexerror:8,indic:[3,4,9],indici:7,individu:7,inform:8,information_tim:8,initi:[0,2,7],initial_point:7,initial_point_list:7,initializion:3,initiat:7,input:4,insid:3,instal:14,installat:[],instead:[],interest:0,interpol:3,intertempor:11,interv:[4,8],intit:2,invers:2,involv:15,ioerror:3,is_decision_period:8,is_information_period:8,is_real_decision_period:8,iter:7,itself:4,join_pric:2,keep:7,kei:[4,8],kent:13,keyword:0,kwarg:0,larg:[8,10,11,15],larger:7,last:[1,7,8,10,11,25],last_period:[8,11],lead:[5,11],learn:7,learning_r:7,legend:9,len:11,length:[7,11],level:[0,1,2,3,4,5,8,11],limit:[],list:[0,1,3,4,7,8,10,11],literatur:15,litterman:13,load_csv:9,lower:[2,8],lsc_p1:5,lsc_p2:5,lst:9,macroeconom:15,made:[10,11],make:15,manag:15,mani:[],map:[3,4],margin:[0,11],marginal_util:11,mate:7,matplotlib:14,max:[3,4,11],max_penalti:11,max_pric:2,maxh:[3,4],maxim:15,maximum:11,meanwhil:15,methid:11,method:[11,25],min:11,mitig:[0,2,3,5,7,8,11],mitigi:0,model:[0,1,2,3,4,5,7,8,10,11,15],mont:[3,4],more:[3,15,25],moreov:15,most:15,mu_0_tre:11,mu_1_tre:11,mu_2_tre:11,multipli:11,must:3,mut_prob:7,mutat:7,name:[3,8],natur:15,nber:[],ndarrai:[0,1,2,3,4,5,7,8,10,11],need:[0,3,4],net:0,never:11,next:8,node:[],node_cons_ep:11,node_period_output:0,node_prob:10,nodemaximum:7,non:[10,25],none:[0,3,7,9,10,11],normal:[3,4],note:0,notic:[],now:1,num:4,num_decision_nod:10,num_featur:7,num_final_st:10,num_gener:7,num_period:10,number:[2,3,4,7,8,10,15,25],numer:7,numerical_gradi:7,numpi:14,object:[0,1,2,3,4,5,7,8,10,11],observ:15,occur:1,off:[3,4,15],offspr:7,open_a:9,oper:[],optimiz:7,option:[0,3,4,7,8,10,11],org:[],origin:7,other:[],other_head:8,other_val0:8,otherwis:3,outcom:[3,4],output_pap:[],over:[2,7,15],overview:[],page:[],paper:[2,11,15],paramet:[0,1,2,3,4,5,7,8,10,11],paramt:[3,4],parent:[7,10],partent:10,path:[1,3,4,10,11,15],payment:0,peak_temp:[3,4],penalti:11,penalty_cost:11,penalty_scal:11,per:[2,11],percent:[2,7],perform:7,period:[0,1,2,3,4,8,10,11,25],period_cons_ep:11,period_len:11,perpetu:0,perpetuity_yield:0,pindyck:[3,4],pip:14,plot:9,plot_dict:9,plot_first_order_condit:9,plot_mitigation_at_nod:9,point:[3,4,7,9,15],polici:4,pop_amount:7,popul:7,potenti:15,predefin:[],prefer:[11,15],prefix:0,premium:0,present:[],previou:[2,8,10,11,25],price:[0,2,4,11,13,15],print:7,print_progress:7,prob_scal:10,probabl:[4,7,10],problem:15,process:7,procid:11,produc:11,program:4,progress:7,project:13,provid:[1,3,10,11,13,25],pure:11,purpos:[0,11],python:14,quick:[],rais:[3,4,7,8,10],random:7,rate:[0,1,3,7,11],reach:[10,25],reachable_end_st:10,real:8,recombin:[10,25],recommend:14,rel:15,remov:2,repeat:11,repositori:14,repres:[1,4,10,15],requir:[],resolv:15,rest:[7,11],result:[0,7,14],return_last:7,return_tre:11,rho:11,richer:15,risk:[0,11,13,15],robert:13,roe:[3,4],row:8,run:7,same:25,sampl:4,save:[0,3,4,8,9],save_output:0,save_sensitivity_analysi:0,save_simul:3,scale:[0,2,7,10],scale_alpha:7,scc:0,scenario:[1,3],scipi:0,sdf:0,seal:[],search:7,see:[2,11,15,25],select:7,self:[],sensit:[0,2,11],sensitivity_output:0,separ:15,set:[8,15],set_valu:[8,11],should:[3,7,11],sign:0,simpl:15,simul:[3,4],simulated_damag:3,sinc:8,sink:5,sink_start:5,slow:1,smallstoragetre:[0,8,11],societi:15,solut:0,sourc:[0,1,2,3,4,5,7,8,9,10,11,14],specif:[11,15],specifi:4,ssc:11,sst:8,standard:15,start:[0,5,7,8],start_at:9,start_char:9,start_dat:0,start_year:[0,8],state:[4,10,11,15,25],step:[7,13],stop:7,storag:[0,8],store:[0,25],store_tre:0,str:[0,3,8],structur:[1,2,3,4,10,11,25],sub:0,subinterv:[8,11],subinterval_len:[3,5,8],subintervals_len:8,substitut:[11,15],suggest:15,sum:11,summer:4,system:14,tail:15,take:[3,4],taken:10,tech_const:2,tech_scal:2,technolog:[2,15],temp:[3,4],temp_dist_param:[3,4],temp_map:[3,4],temperatur:[3,4,15],term:0,than:[0,3,7],thei:15,them:[],theori:13,therefor:25,thi:[0,2,4,11,13,15],thing:[],thu:15,time:[0,1,2,3,4,8,11,15],time_period:8,time_pref:11,tip:[3,4],tip_on:[3,4],titl:9,todai:[1,15],togeth:7,ton:15,too:[8,10],top:7,topk:7,total:1,trade:15,treemodel:[1,2,3,4,10,11,25],tupl:[0,7,10,11],turn:[3,4],tutori:13,two:[0,11,15],type:[0,1,2,3,4,5,7,8,10,11],uncertain:[4,15],uncertainti:15,unfit:[],uniqu:10,unknown:15,unlimit:2,until:3,updat:[7,11],upper:7,used:[0,11],user:[3,4],usual:[1,3],utiliti:[0,7,11],utility_tre:[0,11],val0:8,valid:8,valu:[0,2,3,4,7,8,11,25],valuat:15,valueerror:[4,7,10],var_num:7,veri:15,version:4,vertical_lin:9,visual:14,w22795:[],wagner:[3,4,13],wai:[3,4,11],want:11,weitzman:[3,4],what:[3,10],when:[0,1,8],where:[4,7,8,10,11],wheter:4,which:[2,3,4,5,8,13,15],willing:15,wise:7,wish:14,within:6,work:[0,3,7,8,13,15],worst:10,write:[],write_column:8,write_columns_csv:9,write_columns_exist:8,write_columns_to_exist:9,write_to_fil:4,write_tre:8,www:[],x_data:9,xlabel:9,y_data:9,year:[0,1,2,8,10,11],yearli:[3,4],yer:2,yield:0,ylabel:9,you:[11,14],your:14,zeckhaus:4,zero:[0,11],zin:[11,15]},titles:["dlw.analysis module","dlw.bau module","dlw.cost module","dlw.damage module","dlw.damage_simulation module","dlw.forcing module","Library Reference","dlw.optimization module","dlw.storage_tree module","dlw.tools module","dlw.tree module","dlw.utility module","Example of output from dlw-paper","dlw documentation","Installation","Overview","Analysis","BAU","Cost","Damage","Damage Simulation","Forcing","Optimization","Storage Tree","Tools","Tree","Utility"],titleterms:{access:[],analysi:[0,16],bau:[1,17],content:[],cost:[2,18],damag:[3,19,20],damage_simul:4,dlw:[0,1,2,3,4,5,7,8,9,10,11,12,13,14],document:13,exampl:12,forc:[5,21],from:12,indice:[],install:14,installat:14,librari:6,main:[],modul:[0,1,2,3,4,5,7,8,9,10,11],node:[],optim:7,optimiz:22,output:12,overview:15,packag:[],paper:12,refer:6,requir:14,simul:20,storag:23,storage_tre:8,submodul:[],tabl:[],tool:[9,24],tree:[10,23,25],util:11,utiliti:26,welcom:[]}})